import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChildFriendlyElement
 * @class IconTwotoneChildFriendlyElement
 * @extends {AoflElement}
 */
class IconTwotoneChildFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChildFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-child-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChildFriendlyElement.is, IconTwotoneChildFriendlyElement);

export default IconTwotoneChildFriendlyElement;
