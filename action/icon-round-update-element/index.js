import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUpdateElement
 * @class IconRoundUpdateElement
 * @extends {AoflElement}
 */
class IconRoundUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUpdateElement.is, IconRoundUpdateElement);

export default IconRoundUpdateElement;
