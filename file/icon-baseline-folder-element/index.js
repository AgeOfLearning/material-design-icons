import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFolderElement
 * @class IconBaselineFolderElement
 * @extends {AoflElement}
 */
class IconBaselineFolderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFolderElement.is, IconBaselineFolderElement);

export default IconBaselineFolderElement;
