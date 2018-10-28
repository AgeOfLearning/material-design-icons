import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMicNoneElement
 * @class IconTwotoneMicNoneElement
 * @extends {AoflElement}
 */
class IconTwotoneMicNoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMicNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mic-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMicNoneElement.is, IconTwotoneMicNoneElement);

export default IconTwotoneMicNoneElement;
