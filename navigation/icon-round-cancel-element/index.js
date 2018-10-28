import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCancelElement
 * @class IconRoundCancelElement
 * @extends {AoflElement}
 */
class IconRoundCancelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCancelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cancel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCancelElement.is, IconRoundCancelElement);

export default IconRoundCancelElement;
