import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalBarElement
 * @class IconRoundLocalBarElement
 * @extends {AoflElement}
 */
class IconRoundLocalBarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalBarElement.is, IconRoundLocalBarElement);

export default IconRoundLocalBarElement;
