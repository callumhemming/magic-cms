import CourseCard from "../CourseCard";
import { CourseData } from "../../types";
import Style from "./CoursesRouter.module.css";
import { Modal, Card, Text, Input, Button, Loading } from "@nextui-org/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { v4 } from "uuid";
import {message} from "antd"

interface Props {
  courses: CourseData[];
}

export default function CoursesRouter({ courses }: Props): JSX.Element {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  async function createNewCourse() {
    if(courseCode === ""){
      message.error("CourseCode cannot be blank")
      return
    }
    setIsLoading(() => true);
    const body = {
      atAGlance: JSON.stringify({ data: ["", "", "", "", ""] }),
      courseCode: courseCode,
      examDetails: null,
      extraInfo: null,
      name: courseName,
      overview: null,
      tag: null,
    };

    const fetchString = `https://open-study-college-application.herokuapp.com/courses`;
    // const fetchString = `http://localhost:3000/courses`
    await fetch(fetchString, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });

    setIsLoading(() => false);

    router.push(`/courses/${courseCode}`);
  }

  return (
    <div className={Style.container}>
      {courses.map(courseData => {
        const { name, coursecode } = courseData;
        return <CourseCard key={v4()} name={name} coursecode={coursecode} />;
      })}

      <div className={Style.plusButton}>
        <Card isPressable isHoverable variant="bordered" onClick={openModal}>
          <h1>
            <BsFillPlusCircleFill />
          </h1>
        </Card>
      </div>

      <Modal closeButton open={modalVisible} onClose={closeModal}>
        <Modal.Header>
          <Text>Create New Course</Text>
        </Modal.Header>

        <Modal.Body>
          <Input
            clearable
            label="Course Name"
            placeholder="Course Name"
            onChange={e => {
              setCourseName(e.target.value);
            }}
          />
          <Input
            clearable
            label="Course Code"
            placeholder="Course Code"
            onChange={e => {
              setCourseCode(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button color={"gradient"} onClick={createNewCourse}>
            Submit and go to data entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
