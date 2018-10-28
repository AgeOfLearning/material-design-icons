import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPlayElement
 * @class IconRoundLocalPlayElement
 * @extends {AoflElement}
 */
class IconRoundLocalPlayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPlayElement.is, IconRoundLocalPlayElement);

export default IconRoundLocalPlayElement;
