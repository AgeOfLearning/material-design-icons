import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubdirectoryArrowRightElement
 * @class IconBaselineSubdirectoryArrowRightElement
 * @extends {AoflElement}
 */
class IconBaselineSubdirectoryArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubdirectoryArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subdirectory-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubdirectoryArrowRightElement.is, IconBaselineSubdirectoryArrowRightElement);

export default IconBaselineSubdirectoryArrowRightElement;
