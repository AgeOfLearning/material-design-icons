import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSyncElement
 * @class IconOutlineSyncElement
 * @extends {AoflElement}
 */
class IconOutlineSyncElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSyncElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sync';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSyncElement.is, IconOutlineSyncElement);

export default IconOutlineSyncElement;
