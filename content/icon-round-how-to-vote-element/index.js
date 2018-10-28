import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHowToVoteElement
 * @class IconRoundHowToVoteElement
 * @extends {AoflElement}
 */
class IconRoundHowToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHowToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-how-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHowToVoteElement.is, IconRoundHowToVoteElement);

export default IconRoundHowToVoteElement;
