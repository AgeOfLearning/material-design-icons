import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLinkOffElement
 * @class IconTwotoneLinkOffElement
 * @extends {AoflElement}
 */
class IconTwotoneLinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-link-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLinkOffElement.is, IconTwotoneLinkOffElement);

export default IconTwotoneLinkOffElement;
