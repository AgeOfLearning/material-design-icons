import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooksOneElement
 * @class IconTwotoneLooksOneElement
 * @extends {AoflElement}
 */
class IconTwotoneLooksOneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooksOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooksOneElement.is, IconTwotoneLooksOneElement);

export default IconTwotoneLooksOneElement;
