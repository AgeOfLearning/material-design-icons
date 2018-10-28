import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubdirectoryArrowLeftElement
 * @class IconBaselineSubdirectoryArrowLeftElement
 * @extends {AoflElement}
 */
class IconBaselineSubdirectoryArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubdirectoryArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subdirectory-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubdirectoryArrowLeftElement.is, IconBaselineSubdirectoryArrowLeftElement);

export default IconBaselineSubdirectoryArrowLeftElement;
