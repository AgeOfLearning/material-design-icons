import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpaceBarElement
 * @class IconTwotoneSpaceBarElement
 * @extends {AoflElement}
 */
class IconTwotoneSpaceBarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpaceBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-space-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpaceBarElement.is, IconTwotoneSpaceBarElement);

export default IconTwotoneSpaceBarElement;
