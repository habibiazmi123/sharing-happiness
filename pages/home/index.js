import Head from "next/head";
import Link from "next/link";
import { SearchOutlined, Whatshot } from "@material-ui/icons";

import moment from "moment";
import BaseLayout from "../../components/layouts/BaseLayout";
import Card from "../../components/molecules/Card";
moment.locale("id");

export default function index() {
  return (
    <BaseLayout>
      <Head>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" key="title" />
      </Head>
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="flex mb-4">
          <a className="block w-1/4 lg:mr-4" href="/">
            <svg
              className="w-full hidden md:block h-10"
              viewBox="0 0 273 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Tailwind CSS</title>
              <path
                fill="url(#paint0_linear)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
              ></path>
              <path
                fill="#2D3748"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.996 29.652H81.284V38.772C81.284 41.204 82.88 41.166 85.996 41.014V44.7C79.688 45.46 77.18 43.712 77.18 38.772V29.652H73.684V25.7H77.18V20.596L81.284 19.38V25.7H85.996V29.652ZM103.958 25.7H108.062V44.7H103.958V41.964C102.514 43.978 100.272 45.194 97.308 45.194C92.14 45.194 87.846 40.824 87.846 35.2C87.846 29.538 92.14 25.206 97.308 25.206C100.272 25.206 102.514 26.422 103.958 28.398V25.7ZM97.954 41.28C101.374 41.28 103.958 38.734 103.958 35.2C103.958 31.666 101.374 29.12 97.954 29.12C94.534 29.12 91.95 31.666 91.95 35.2C91.95 38.734 94.534 41.28 97.954 41.28ZM114.902 22.85C113.458 22.85 112.28 21.634 112.28 20.228C112.28 18.784 113.458 17.606 114.902 17.606C116.346 17.606 117.524 18.784 117.524 20.228C117.524 21.634 116.346 22.85 114.902 22.85ZM112.85 44.7V25.7H116.954V44.7H112.85ZM121.704 44.7V16.96H125.808V44.7H121.704ZM152.446 25.7H156.778L150.812 44.7H146.784L142.832 31.894L138.842 44.7H134.814L128.848 25.7H133.18L136.866 38.81L140.856 25.7H144.77L148.722 38.81L152.446 25.7ZM161.87 22.85C160.426 22.85 159.248 21.634 159.248 20.228C159.248 18.784 160.426 17.606 161.87 17.606C163.314 17.606 164.492 18.784 164.492 20.228C164.492 21.634 163.314 22.85 161.87 22.85ZM159.818 44.7V25.7H163.922V44.7H159.818ZM178.666 25.206C182.922 25.206 185.962 28.094 185.962 33.034V44.7H181.858V33.452C181.858 30.564 180.186 29.044 177.602 29.044C174.904 29.044 172.776 30.64 172.776 34.516V44.7H168.672V25.7H172.776V28.132C174.03 26.156 176.082 25.206 178.666 25.206ZM205.418 18.1H209.522V44.7H205.418V41.964C203.974 43.978 201.732 45.194 198.768 45.194C193.6 45.194 189.306 40.824 189.306 35.2C189.306 29.538 193.6 25.206 198.768 25.206C201.732 25.206 203.974 26.422 205.418 28.398V18.1ZM199.414 41.28C202.834 41.28 205.418 38.734 205.418 35.2C205.418 31.666 202.834 29.12 199.414 29.12C195.994 29.12 193.41 31.666 193.41 35.2C193.41 38.734 195.994 41.28 199.414 41.28ZM223.278 45.194C217.54 45.194 213.246 40.824 213.246 35.2C213.246 29.538 217.54 25.206 223.278 25.206C227.002 25.206 230.232 27.144 231.752 30.108L228.218 32.16C227.382 30.374 225.52 29.234 223.24 29.234C219.896 29.234 217.35 31.78 217.35 35.2C217.35 38.62 219.896 41.166 223.24 41.166C225.52 41.166 227.382 39.988 228.294 38.24L231.828 40.254C230.232 43.256 227.002 45.194 223.278 45.194ZM238.592 30.944C238.592 34.402 248.814 32.312 248.814 39.342C248.814 43.142 245.508 45.194 241.404 45.194C237.604 45.194 234.868 43.484 233.652 40.748L237.186 38.696C237.794 40.406 239.314 41.432 241.404 41.432C243.228 41.432 244.634 40.824 244.634 39.304C244.634 35.922 234.412 37.822 234.412 31.02C234.412 27.448 237.49 25.206 241.366 25.206C244.482 25.206 247.066 26.65 248.396 29.158L244.938 31.096C244.254 29.614 242.924 28.93 241.366 28.93C239.884 28.93 238.592 29.576 238.592 30.944ZM256.11 30.944C256.11 34.402 266.332 32.312 266.332 39.342C266.332 43.142 263.026 45.194 258.922 45.194C255.122 45.194 252.386 43.484 251.17 40.748L254.704 38.696C255.312 40.406 256.832 41.432 258.922 41.432C260.746 41.432 262.152 40.824 262.152 39.304C262.152 35.922 251.93 37.822 251.93 31.02C251.93 27.448 255.008 25.206 258.884 25.206C262 25.206 264.584 26.65 265.914 29.158L262.456 31.096C261.772 29.614 260.442 28.93 258.884 28.93C257.402 28.93 256.11 29.576 256.11 30.944Z"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="3.5"
                  y1="16"
                  x2="59"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2298BD"></stop>
                  <stop offset="1" stopColor="#0ED7B5"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="w-10 h-10 block md:hidden"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Tailwind CSS</title>
              <path
                d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                transform="translate(5 16)"
                fill="url(#logoMarkGradient)"
                fillRule="evenodd"
              ></path>
              <defs>
                <linearGradient x1="0%" y1="0%" y2="100%" id="logoMarkGradient">
                  <stop stopColor="#2298BD"></stop>
                  <stop offset="1" stopColor="#0ED7B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <div className="relative w-3/4 mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Today</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {moment().format("DD, MMMM ")}
          </p>
        </div>
        <div className="mb-5">
          {/* <a
            href="#"
            className="block rounded-lg relative transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background:
                "url(https://sharinghappiness.imgix.net/files/programgalleries/f679c878dbd0dcf6d77a58bd6ba0e84f-20190513071715.jpg)",
              backgroundPosition: "left",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-full bg-teal-400 text-white text-xs py-1 pl-2 pr-3 leading-none">
                <Whatshot style={{ height: 16, width: 16, marginRight: 4 }} />
                <span className="align-middle">FRESH</span>
              </div>
            </div>
            <div className="h-48"></div>
            <div className="p-5">
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                Bangun Teras Tahfizh Untuk Pemuda Penghapal Qur'an
              </h2>
              <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                <div className="flex-1 flex items-center">
                  <div
                    className="rounded-full w-8 h-8 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/women/74.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div>Gwen Thomson</div>
                </div>
                <div>
                  <i className="mdi mdi-thumb-up"></i> 18
                </div>
              </div>
            </div>
          </a> */}
          <Link href="">
            <Card
              size="lg"
              background="https://sharinghappiness.imgix.net/files/programgalleries/f679c878dbd0dcf6d77a58bd6ba0e84f-20190513071715.jpg"
              title="Bangun Teras Tahfizh Untuk Pemuda Penghapal Qur'an"
              avatar="https://randomuser.me/api/portraits/women/74.jpg"
              avatarname="Ilman manarul qori"
              //   countliked={"7K"}
            />
          </Link>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background:
                "url(https://images.unsplash.com/photo-1593113616828-6f22bca04804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              Top 5 Cocktail Bars in&nbsp;NYC
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/women/55.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div>Kayden Buckley</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 7
              </div>
            </div>
          </a>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Yesterday</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {moment().add(-1, "days").format("DD, MMMM ")}
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                DJ Dan Spins The Wheels
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Top Travels Destinations For 2020
              </h3>
            </a>
          </div>
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                M&S Launches New Makeup Range!
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                APT Set To Be A&nbsp;Ripper
              </h3>
            </a>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Previous</h1>
        </div>
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1591522810850-58128c5fb089?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "center",
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                SPORTS
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/men/41.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div>Jack Ryan</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1588779481061-1706804c9556?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                ART
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/men/63.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div>Kevin Jackson</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                MUSIC
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/women/11.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div>Rowena Wheeler</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                WORLD
              </p>
              <h3 className="text-md font-semibold leading-tight mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-5 h-5 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/women/74.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div>Gwen Thomson</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </BaseLayout>
  );
}