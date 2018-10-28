import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLinkElement
 * @class IconTwotoneLinkElement
 * @extends {AoflElement}
 */
class IconTwotoneLinkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLinkElement.is, IconTwotoneLinkElement);

export default IconTwotoneLinkElement;
