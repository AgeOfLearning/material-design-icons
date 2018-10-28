import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRotate90DegreesCcwElement
 * @class IconTwotoneRotate90DegreesCcwElement
 * @extends {AoflElement}
 */
class IconTwotoneRotate90DegreesCcwElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRotate90DegreesCcwElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rotate-90-degrees-ccw';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRotate90DegreesCcwElement.is, IconTwotoneRotate90DegreesCcwElement);

export default IconTwotoneRotate90DegreesCcwElement;
