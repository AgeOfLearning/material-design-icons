import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFolderSharedElement
 * @class IconBaselineFolderSharedElement
 * @extends {AoflElement}
 */
class IconBaselineFolderSharedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFolderSharedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-folder-shared';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFolderSharedElement.is, IconBaselineFolderSharedElement);

export default IconBaselineFolderSharedElement;
