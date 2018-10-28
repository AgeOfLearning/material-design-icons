import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubdirectoryArrowRightElement
 * @class IconSharpSubdirectoryArrowRightElement
 * @extends {AoflElement}
 */
class IconSharpSubdirectoryArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubdirectoryArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subdirectory-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubdirectoryArrowRightElement.is, IconSharpSubdirectoryArrowRightElement);

export default IconSharpSubdirectoryArrowRightElement;
