import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRotate90DegreesCcwElement
 * @class IconOutlineRotate90DegreesCcwElement
 * @extends {AoflElement}
 */
class IconOutlineRotate90DegreesCcwElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRotate90DegreesCcwElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rotate-90-degrees-ccw';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRotate90DegreesCcwElement.is, IconOutlineRotate90DegreesCcwElement);

export default IconOutlineRotate90DegreesCcwElement;
