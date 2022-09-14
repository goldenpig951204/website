import { CardContent, Card, Typography } from "@material-ui/core";
import Section from "components/section";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import classes from "./ideas.module.css";

export default function Ideas() {
  return (
    <>
      <Section title="Ideas List for GSOC’21">
        <div className={classes.grid}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Webapp for learning algorithms</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> We have a lot of algorithms in 20+
                programming languages in our GitHub repositories, but they are
                not properly organised and discoverability is not good. For a
                beginner, it becomes difficult to learn algorithms and their
                implementation. For a person who is not familiar with Git or
                Github, this can become a hurdle in learning. So we want to
                build an interactive web app where students can explore various
                algorithms and learn their implementation in the programming
                language of their choice. The code for these algorithms and
                their plain text explanation should be fetched automatically
                from Github Repos and rendered in a readable form. Further, this
                plain text explanation can also be multilingual.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>
                    An interactive multilingual web app to explore and learn
                    algorithms in the programming language of their choice.
                  </li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> HTML, CSS, Javascript, React, Next.js
              </p>
              <p>
                <b>Difficulty: </b> Easy
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Malte Jürgens (Gitter:{" "}
                    <a href="https://gitter.im/maltejur">maltejur</a>)
                  </li>
                  <li>
                    David Leal (Gitter:{" "}
                    <a href="https://gitter.im/Panquesito7">Panquesito7</a>)
                  </li>
                  <li>
                    Anshul Malik (Gitter:{" "}
                    <a href="https://gitter.im/anshulmalikce">anshulmalikce</a>)
                  </li>
                  <li>
                    Chetan Kaushik (Gitter:{" "}
                    <a href="https://gitter.im/dynamitechetan">
                      dynamitechetan
                    </a>
                    )
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>The Algorithms CMS - Frontend</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> Currently, the user has to clone a
                repository and then commit new files on it to add a new
                algorithm. For someone who is not familiar with git but is
                well-versed in algorithms, it would be difficult to contribute.
                The CMS will present a web application to the users where they
                can write code for the new algorithm and add plain text
                explanations.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>
                    A CMS that will serve as an interface to add algorithms.
                  </li>
                  <li>
                    Capability to add programming language implementation.
                  </li>
                  <li>Capability to add plain text translation.</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> React, Javascript, CSS
              </p>
              <p>
                <b>Difficulty: </b> Medium
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Malte Jürgens (Gitter:{" "}
                    <a href="https://gitter.im/maltejur">maltejur</a>)
                  </li>
                  <li>
                    David Leal (Gitter:{" "}
                    <a href="https://gitter.im/Panquesito7">Panquesito7</a>)
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Merlin Extension</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> Currently, if you want to apply
                for a job, you visit the career page of the job. Then, you fill
                the form with the same details you have filled for other jobs
                that you have applied for. Sometimes, Google Chrome helps fill
                the form by autofill data, but this is not always possible. The
                forms may ask your Twitter/LinkedIn profile URL and Google
                Chrome doesn’t save this. In this situation, you visit the
                desired social page, copy the URL and then paste it on the form.
                The same happens when skills and experience are filed in the
                application. In this project, we are trying to make a browser
                extension that is capable of saving everything and auto-fills
                the job form or any type of form effectively.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>
                    A browser extension that stores personal and professional
                    information.
                  </li>
                  <li>
                    Save time for filling out forms by auto-filling almost all
                    the fields.
                  </li>
                  <li>Improve accuracy of auto-fill suggestions.</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> HTML, CSS, Javascript
              </p>
              <p>
                <b>Difficulty: </b> Easy
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Vishwesh Jainkuiya (Gitter:{" "}
                    <a href="https://gitter.im/jainkuniya">jainkuniya</a>)
                  </li>
                  <li>
                    Abhinn Mishra (Gitter:{" "}
                    <a href="https://gitter.im/mishraabhinn">mishraabhinn</a>)
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>The Algorithms CMS - Backend</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> This will be a server to handle
                the save events from the CMS. This will have a basic
                authentication and authorisation system. We need to serve APIs
                for saving new algorithms, editing existing algorithms and
                moderating the changes. The logic to parse the payload received
                and commit it to the respective repositories will stay here.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>
                    A CMS backend that will serve as a data source for the web
                    app.
                  </li>
                  <li>Exposed APIs to save and update blogs.</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> Python, GitHub API
              </p>
              <p>
                <b>Difficulty: </b> Medium
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Nikhil Kala (Gitter:{" "}
                    <a href="https://gitter.im/nikhilkala">nikhilkala</a>)
                  </li>
                  <li>
                    Anup Kumar Panwar (Gitter:{" "}
                    <a href="https://gitter.im/anupkumarpanwar">
                      anupkumarpanwar
                    </a>
                    )
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Algorithms Keeper</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> Algorithms Keeper is an automated
                pull request reviewing bot. It already automates the initial
                review of Python pull requests; therefore, this project will
                extend that tool to perform a deeper analysis of proposed
                changes to code and documentation. The current tool focuses only
                on Python submissions but TheAlgorithms currently has
                repositories for 25 programming languages. Work should be done
                to make useful initial code reviews across multiple programming
                languages. Automated reviews should be intuitive and
                self-documenting and should always encourage contributions.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>
                    Improve automated initial reviews of Python pull requests.
                  </li>
                  <li>Automate initial reviews for other languages.</li>
                  <li>
                    Study of which features (test coverage, self-documenting
                    variable names, type hints, etc.) are most important for
                    project maintainers.
                  </li>
                  <li>
                    Improve sensitivity to the needs of submitters (esp. those
                    learning the language and learning how to contribute to open
                    source).
                  </li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> GitHub Actions, Python
              </p>
              <p>
                <b>Difficulty: </b> Hard
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Dhruv Manilawala (Gitter:{" "}
                    <a href="https://gitter.im/dhruvmanila">dhruvmanila</a>)
                  </li>
                  <li>
                    Christian Clauss (Gitter:{" "}
                    <a href="https://gitter.im/cclauss">cclauss</a>)
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Blog dashboard</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> Apart from algorithms, the web app
                will have a section for technical blogs mostly related to
                algorithms and scalability. We want to create a dashboard where
                the user can write blogs in MD format. On saving the blog, the
                MD file should be committed to the repository on Github, which
                would then be fetched and rendered in the explore blogs section.
                This should support multiple languages.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>A blog section on the website.</li>
                  <li>Dashboard to create blogs.</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> Javascript, Python, React
              </p>
              <p>
                <b>Difficulty: </b> Easy
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Rohit Gupta (Gitter:{" "}
                    <a href="https://gitter.im/r0hit-gupta">r0hit-gupta</a>)
                  </li>
                  <li>
                    Chetan Kaushik (Gitter:{" "}
                    <a href="https://gitter.im/dynamitechetan">
                      dynamitechetan
                    </a>
                    )
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Contributor profile</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> Every contributor on the
                organisation would have a contributor profile on the website.
                This page should show all the algorithms and blogs added by that
                user. This would include contributions from both, committing
                directly to the repo and adding from CMS. A contribution chart
                should also be displayed on the profile just as it does on
                Github. This would help to display the top contributors and
                encourage others to learn and share algorithms.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>Contributor profile with top charts.</li>
                  <li>Encourage people to contribute and learn more.</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> React, Github APIs, Javascript, Charts
              </p>
              <p>
                <b>Difficulty: </b> Easy
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Madhav Gaba (Gitter:{" "}
                    <a href="https://gitter.im/madhavgaba">madhavgaba</a>)
                  </li>
                  <li>
                    Nikhil Kala (Gitter:{" "}
                    <a href="https://gitter.im/nikhilkala">nikhilkala</a>)
                  </li>
                  <li>
                    Anup Kumar Panwar (Gitter:{" "}
                    <a href="https://gitter.im/anupkumarpanwar">
                      anupkumarpanwar
                    </a>
                    )
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">
                <u>Flutter App</u>
              </Typography>
              <p>
                <b>Detailed Description: </b> A simple flutter application for
                The Algorithms. It will help in learning the space and time
                complexities of various algorithms using spaced repetition and
                flashcards. Users will be able to play quizzes, learn algorithms
                and read blogs. Every day the user should get a notification for
                the algorithm of the day and a streak will be maintained to keep
                track of all the algorithms the user has learned.
              </p>
              <p>
                <b>Expected outcomes: </b>
                <ul>
                  <li>Flutter app for The Algorithms.</li>
                  <li>Learn a new algorithm everyday</li>
                </ul>
              </p>
              <p>
                <b>Skills Required: </b> Flutter
              </p>
              <p>
                <b>Difficulty: </b> Easy
              </p>
              <p>
                <b>Potential Mentors: </b>
                <ol>
                  <li>
                    Rohit Gupta (Gitter:{" "}
                    <a href="https://gitter.im/r0hit-gupta">r0hit-gupta</a>)
                  </li>
                  <li>
                    Rahul Kathuriya (Gitter:{" "}
                    <a href="https://gitter.im/RahulKathuria">RahulKathuria</a>)
                  </li>
                </ol>
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
