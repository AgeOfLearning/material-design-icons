import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalDiningElement
 * @class IconRoundLocalDiningElement
 * @extends {AoflElement}
 */
class IconRoundLocalDiningElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalDiningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-dining';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalDiningElement.is, IconRoundLocalDiningElement);

export default IconRoundLocalDiningElement;
