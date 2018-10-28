import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubdirectoryArrowLeftElement
 * @class IconSharpSubdirectoryArrowLeftElement
 * @extends {AoflElement}
 */
class IconSharpSubdirectoryArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubdirectoryArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subdirectory-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubdirectoryArrowLeftElement.is, IconSharpSubdirectoryArrowLeftElement);

export default IconSharpSubdirectoryArrowLeftElement;
