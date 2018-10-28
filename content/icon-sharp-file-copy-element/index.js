import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFileCopyElement
 * @class IconSharpFileCopyElement
 * @extends {AoflElement}
 */
class IconSharpFileCopyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFileCopyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-file-copy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFileCopyElement.is, IconSharpFileCopyElement);

export default IconSharpFileCopyElement;
