import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSendElement
 * @class IconBaselineSendElement
 * @extends {AoflElement}
 */
class IconBaselineSendElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-send';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSendElement.is, IconBaselineSendElement);

export default IconBaselineSendElement;
