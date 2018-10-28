import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArchiveElement
 * @class IconTwotoneArchiveElement
 * @extends {AoflElement}
 */
class IconTwotoneArchiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-archive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArchiveElement.is, IconTwotoneArchiveElement);

export default IconTwotoneArchiveElement;
