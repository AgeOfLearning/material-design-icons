import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFolderOpenElement
 * @class IconBaselineFolderOpenElement
 * @extends {AoflElement}
 */
class IconBaselineFolderOpenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFolderOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-folder-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFolderOpenElement.is, IconBaselineFolderOpenElement);

export default IconBaselineFolderOpenElement;
