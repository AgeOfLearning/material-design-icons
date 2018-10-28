import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundThumbsUpDownElement
 * @class IconRoundThumbsUpDownElement
 * @extends {AoflElement}
 */
class IconRoundThumbsUpDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundThumbsUpDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-thumbs-up-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundThumbsUpDownElement.is, IconRoundThumbsUpDownElement);

export default IconRoundThumbsUpDownElement;
