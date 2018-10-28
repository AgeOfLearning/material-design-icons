import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDoneOutlineElement
 * @class IconTwotoneDoneOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneDoneOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDoneOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-done-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDoneOutlineElement.is, IconTwotoneDoneOutlineElement);

export default IconTwotoneDoneOutlineElement;
