import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloseElement
 * @class IconRoundCloseElement
 * @extends {AoflElement}
 */
class IconRoundCloseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-close';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloseElement.is, IconRoundCloseElement);

export default IconRoundCloseElement;
