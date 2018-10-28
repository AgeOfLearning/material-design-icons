import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFaceElement
 * @class IconTwotoneFaceElement
 * @extends {AoflElement}
 */
class IconTwotoneFaceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-face';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFaceElement.is, IconTwotoneFaceElement);

export default IconTwotoneFaceElement;
