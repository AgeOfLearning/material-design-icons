import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDoneElement
 * @class IconTwotoneDoneElement
 * @extends {AoflElement}
 */
class IconTwotoneDoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDoneElement.is, IconTwotoneDoneElement);

export default IconTwotoneDoneElement;
