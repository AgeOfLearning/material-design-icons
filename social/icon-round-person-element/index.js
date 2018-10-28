import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonElement
 * @class IconRoundPersonElement
 * @extends {AoflElement}
 */
class IconRoundPersonElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonElement.is, IconRoundPersonElement);

export default IconRoundPersonElement;
