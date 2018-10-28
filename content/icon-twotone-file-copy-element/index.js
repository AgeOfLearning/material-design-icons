import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFileCopyElement
 * @class IconTwotoneFileCopyElement
 * @extends {AoflElement}
 */
class IconTwotoneFileCopyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFileCopyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-file-copy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFileCopyElement.is, IconTwotoneFileCopyElement);

export default IconTwotoneFileCopyElement;
