import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChildFriendlyElement
 * @class IconOutlineChildFriendlyElement
 * @extends {AoflElement}
 */
class IconOutlineChildFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChildFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-child-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChildFriendlyElement.is, IconOutlineChildFriendlyElement);

export default IconOutlineChildFriendlyElement;
