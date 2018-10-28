import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDetailsElement
 * @class IconRoundDetailsElement
 * @extends {AoflElement}
 */
class IconRoundDetailsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDetailsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-details';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDetailsElement.is, IconRoundDetailsElement);

export default IconRoundDetailsElement;
