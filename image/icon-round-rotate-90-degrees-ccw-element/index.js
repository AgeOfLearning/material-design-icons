import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRotate90DegreesCcwElement
 * @class IconRoundRotate90DegreesCcwElement
 * @extends {AoflElement}
 */
class IconRoundRotate90DegreesCcwElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRotate90DegreesCcwElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rotate-90-degrees-ccw';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRotate90DegreesCcwElement.is, IconRoundRotate90DegreesCcwElement);

export default IconRoundRotate90DegreesCcwElement;
