import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImportContactsElement
 * @class IconRoundImportContactsElement
 * @extends {AoflElement}
 */
class IconRoundImportContactsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImportContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-import-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImportContactsElement.is, IconRoundImportContactsElement);

export default IconRoundImportContactsElement;
