import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSyncElement
 * @class IconSharpSyncElement
 * @extends {AoflElement}
 */
class IconSharpSyncElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSyncElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sync';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSyncElement.is, IconSharpSyncElement);

export default IconSharpSyncElement;
