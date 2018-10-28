import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRotate90DegreesCcwElement
 * @class IconSharpRotate90DegreesCcwElement
 * @extends {AoflElement}
 */
class IconSharpRotate90DegreesCcwElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRotate90DegreesCcwElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rotate-90-degrees-ccw';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRotate90DegreesCcwElement.is, IconSharpRotate90DegreesCcwElement);

export default IconSharpRotate90DegreesCcwElement;
