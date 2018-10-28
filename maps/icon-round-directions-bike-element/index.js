import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsBikeElement
 * @class IconRoundDirectionsBikeElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsBikeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsBikeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-bike';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsBikeElement.is, IconRoundDirectionsBikeElement);

export default IconRoundDirectionsBikeElement;
