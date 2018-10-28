import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSyncElement
 * @class IconBaselineSyncElement
 * @extends {AoflElement}
 */
class IconBaselineSyncElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSyncElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sync';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSyncElement.is, IconBaselineSyncElement);

export default IconBaselineSyncElement;
