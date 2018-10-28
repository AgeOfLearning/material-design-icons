import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubjectElement
 * @class IconRoundSubjectElement
 * @extends {AoflElement}
 */
class IconRoundSubjectElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubjectElement.is, IconRoundSubjectElement);

export default IconRoundSubjectElement;
