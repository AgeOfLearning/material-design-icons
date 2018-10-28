import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPollElement
 * @class IconRoundPollElement
 * @extends {AoflElement}
 */
class IconRoundPollElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-poll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPollElement.is, IconRoundPollElement);

export default IconRoundPollElement;
