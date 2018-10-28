import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsBusElement
 * @class IconRoundDirectionsBusElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsBusElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsBusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-bus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsBusElement.is, IconRoundDirectionsBusElement);

export default IconRoundDirectionsBusElement;
