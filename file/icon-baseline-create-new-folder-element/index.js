import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCreateNewFolderElement
 * @class IconBaselineCreateNewFolderElement
 * @extends {AoflElement}
 */
class IconBaselineCreateNewFolderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCreateNewFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-create-new-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCreateNewFolderElement.is, IconBaselineCreateNewFolderElement);

export default IconBaselineCreateNewFolderElement;
