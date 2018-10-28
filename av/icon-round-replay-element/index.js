import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplayElement
 * @class IconRoundReplayElement
 * @extends {AoflElement}
 */
class IconRoundReplayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-replay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplayElement.is, IconRoundReplayElement);

export default IconRoundReplayElement;
