import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooksElement
 * @class IconTwotoneLooksElement
 * @extends {AoflElement}
 */
class IconTwotoneLooksElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooksElement.is, IconTwotoneLooksElement);

export default IconTwotoneLooksElement;
