import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPoolElement
 * @class IconRoundPoolElement
 * @extends {AoflElement}
 */
class IconRoundPoolElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPoolElement.is, IconRoundPoolElement);

export default IconRoundPoolElement;
