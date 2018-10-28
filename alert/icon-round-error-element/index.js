import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundErrorElement
 * @class IconRoundErrorElement
 * @extends {AoflElement}
 */
class IconRoundErrorElement extends AoflElement {
  /**
   * Creates an instance of IconRoundErrorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-error';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundErrorElement.is, IconRoundErrorElement);

export default IconRoundErrorElement;
