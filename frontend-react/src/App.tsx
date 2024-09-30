import { useEffect, useState } from "react";
import "./App.css";

interface Field {
  id: number;
  name: string;
  orderNumber: number;
}
function App() {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    console.log("fetchFields");
    const fetchFields = async () => {
      const response = await fetch("http://localhost:80/fields");
      const fields = (await response.json()) as Field[];
      setFields(fields);
    };

    fetchFields();
  }, []);
  return (
    <>
      {fields.map((field) => {
        return <span>{field.name}</span>;
      })}
      <div className="left">
        <p>left</p>
      </div>

      <div className="right">right</div>

      <div className="center">
        <div className="board">
          <div className="corner">
            <div>1</div>
          </div>

          <div className="row row-horizontal row-bottom">
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>
          <div className="corner">
            <div>11</div>
          </div>
          <div className="row row-vertical row-left">
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
          </div>
          <div className="corner">
            {/*<Tile type={"CORNER"} name="PARKING" />*/}
          </div>
          <div className="row row-horizontal row-top">
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
          </div>
          <div className="corner">
            <div>31</div>
          </div>
          <div className="row row-vertical row-right">
            <div>32</div>
            <div>33</div>
            <div>34</div>
            <div>35</div>
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
            <div>40</div>
          </div>
          <div className="board-center"></div>
        </div>
      </div>
    </>
  );
}

export default App;
