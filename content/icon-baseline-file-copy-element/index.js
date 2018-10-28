import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFileCopyElement
 * @class IconBaselineFileCopyElement
 * @extends {AoflElement}
 */
class IconBaselineFileCopyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFileCopyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-file-copy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFileCopyElement.is, IconBaselineFileCopyElement);

export default IconBaselineFileCopyElement;
